import { getLanguages } from "../api/getLanguages";
import { Language } from "../types/Language";
import { Languages } from "../types/Languages";
import { Repository } from "../types/Repository";

function roundToOneDecimalPlace(number: number) {
  return Math.trunc(number * 10) / 10;
}

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

  const languagePercentages: Language[] = [];

  for (const language in languageCounts) {
    const newLanguage = {
      name: language,
      percent: roundToOneDecimalPlace(
        (languageCounts[language] / totalSum) * 100
      ),
    };

    languagePercentages.push(newLanguage);
  }

  return languagePercentages;
};
