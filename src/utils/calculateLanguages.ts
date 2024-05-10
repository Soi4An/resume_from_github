import { getLanguages } from "../api/getLanguages";
import { Languages } from "../types/Languages";
import { Repository } from "../types/Repository";

export const calculateLanguages = async (repos: Repository[]) => {
  const languageCounts: Languages = {};
  let totalSum = 0;

  for (const repo of repos) {
    const languages = await getLanguages(repo);

    for (const language in languages) {
      if (!languageCounts[language]) {
        languageCounts[language] = 0;
      }

      languageCounts[language] += languages[language];
      totalSum += languages[language];
    }
  }

  const languagePercentages: Languages = {};

  for (const language in languageCounts) {
    languagePercentages[language] = (languageCounts[language] / totalSum) * 100;
  }

  return languagePercentages;
};
