function canConstruct(ransomNote: string, magazine: string) {
  const magazineMap = new Map<string, number>();

  for (let i = 0; i < magazine.length; i++) {
    magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const valueInMagazine = magazineMap.get(ransomNote[i]);

    if (valueInMagazine) {
      magazineMap.set(ransomNote[i], valueInMagazine - 1);
      continue;
    }

    return false;
  }
  return true;
}

const resultOne = canConstruct("acab", "baa123");
console.log("🚀 ~ file: Ransom Note.ts:22 ~ result:", resultOne);
// ransomNote: aab
// magazine: baa123

// expected output: true
