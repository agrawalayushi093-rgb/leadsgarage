const introKey = 'leadsgarage:intro-seen';
let seenInThisDocument = false;

export function hasSeenIntro() {
  try {
    return seenInThisDocument || sessionStorage.getItem(introKey) === '1';
  } catch {
    return seenInThisDocument;
  }
}

export function markIntroSeen() {
  seenInThisDocument = true;
  try {
    sessionStorage.setItem(introKey, '1');
  } catch {
    // Keep navigation usable when browser storage is unavailable.
  }
}
