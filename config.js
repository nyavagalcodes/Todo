// ═══════════════════════════════════════════════════════
//  TaskFlow — App Configuration
//  Upload this file to your GitHub repo (taskflow)
//  alongside index.html
//
//  ⚠️  Keep this file in your PUBLIC repo carefully.
//      PINs are stored as SHA-256 hashes — not plain text.
//      Never store plain PINs here.
// ═══════════════════════════════════════════════════════
//
//  HOW TO GET A PIN HASH:
//  1. Go to https://emn178.github.io/online-tools/sha256.html
//  2. Type the 6-digit PIN in the input box
//  3. Copy the hash string it generates
//  4. Paste it as the pinHash value below
//
//  HOW TO ADD A NEW USER:
//  1. Copy one of the user blocks below
//  2. Set a unique username
//  3. Generate a PIN hash using the steps above
//  4. Paste the new block into the users array
//  5. Commit config.js to GitHub — done!
//
//  HOW TO REMOVE A USER:
//  Simply delete their block from the users array
//
// ═══════════════════════════════════════════════════════

const APP_CONFIG = {

  // ── Users ────────────────────────────────────────────
  // Each user has a username and a SHA-256 hashed PIN.
  // Username is shown on the login screen.
  // Add as many users as you need.

  users: [
    {
      username: 'Navaneet',          // Display name shown on login screen
      pinHash:  '4994625184a72ac4993713609c93308a12166a2edd17eadecd355f545ece3ebc',
                                  // ↑ SHA-256 hash of your PIN (not the PIN itself)
    },

    // ── Example: add more users like this ──
    // {
    //   username: 'Alice',
    //   pinHash:  '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    //             // ↑ hash of PIN: 123456
    // },
    // {
    //   username: 'Bob',
    //   pinHash:  '91b4d142823f7d20c5f08df69122de43f35f057a988d9619f6d3138485c9a203',
    //             // ↑ hash of PIN: 000000
    // },
  ],

  // ── Security settings ────────────────────────────────

  // How many wrong PIN attempts before lockout
  MAX_ATTEMPTS: 5,

  // How long the lockout lasts (in minutes)
  LOCKOUT_MINUTES: 5,

  // How long a session stays unlocked (in minutes)
  // After this time the PIN screen shows again
  // Set to 0 to require PIN every single session
  SESSION_TIMEOUT_MINUTES: 0,

};
