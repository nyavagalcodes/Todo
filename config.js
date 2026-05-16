// ═══════════════════════════════════════════════════════
//  TaskFlow — Configuration
//  This is the ONLY file you need to edit for:
//    - Changing your PIN
//    - Adding/removing users
//    - Adjusting security settings
//
//  HOW TO CHANGE YOUR PIN:
//  1. Go to https://emn178.github.io/online-tools/sha256.html
//  2. Type your new PIN → copy the hash
//  3. Replace the pinHash value below
//  4. Commit this file → live in 60 seconds!
//
//  HOW TO ADD A USER:
//  Copy one of the user blocks and add it to the users array
//
//  EXAMPLE HASHES (for reference):
//  PIN 123456 → 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
//  PIN 000000 → 91b4d142823f7d20c5f08df69122de43f35f057a988d9619f6d3138485c9a203
// ═══════════════════════════════════════════════════════

window.APP_CONFIG = {

  // PIN length — change to 5 if you want a 5-digit PIN
  PIN_LENGTH: 6,

  users: [
    {
      username: 'Navaneet',
      pinHash:  '4994625184a72ac4993713609c93308a12166a2edd17eadecd355f545ece3ebc',
      // ↑ Currently: hash of 94496 (5 digits, change PIN_LENGTH to 5 above)
    },

    // Add more users like this:
    // {
    //   username: 'Alice',
    //   pinHash:  'paste-sha256-hash-here',
    // },
  ],

  // Max wrong attempts before lockout
  MAX_ATTEMPTS: 5,

  // Lockout duration in minutes
  LOCKOUT_MINUTES: 5,

};
