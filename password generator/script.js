
    class Password {
      constructor() {
        this.pass = "";
      }

      generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let number = "1234567890";
        let special = "!%$#@&^*()";

        if (len < 3) {
          alert("Your password should be at least 3 characters long.");
          return "";
        }

        this.pass = "";
        let i = 0;
        while (i < len) {
          this.pass += chars[Math.floor(Math.random() * chars.length)];
          this.pass += number[Math.floor(Math.random() * number.length)];
          this.pass += special[Math.floor(Math.random() * special.length)];
          i += 3;
        }
        return this.pass.substr(0, len);
      }
    }

    const passwordGen = new Password();

    function generate() {
      const len = parseInt(document.getElementById("length").value);
      const password = passwordGen.generatePassword(len);
      document.getElementById("password").value = password;
    }

    function copy() {
      const passField = document.getElementById("password");
      if (!passField.value) {
        alert("Nothing to copy!");
        return;
      }
      passField.select();
      navigator.clipboard.writeText(passField.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy!"));
    }

    function reset() {
      document.getElementById("password").value = "";
      document.getElementById("length").value = "";
    }
  