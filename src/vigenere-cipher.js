const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") {
      throw Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    var encrResult = this.Vizhener(message, key, "encrypt");
    if (!this.direction) {
      return encrResult.split("").reverse().join("");
    }
    return encrResult;
  }
  decrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") {
      throw Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    var decrResult = this.Vizhener(message, key, "decrypt");

    if (!this.direction) {
      return decrResult.split("").reverse().join("");
    }
    return decrResult;
  }

  Vizhener(m, k, mode) {
    var a = this.a;

    var r = ""; //Пустой результат
    var c;
    var j = 0;
    for (let i = 0; i < m.length; i++) {
      //encrypt/decrypt
      //Vizhener - encrypt/decrypt one forumula (encrypt - by default; decrypt - when (mode === 'decrypt') )

      var mi = a.indexOf(m[i >= m.length ? i % m.length : i]); //подгон сообщения/шифротекста - к ключу (если меньше)

      if (mi == -1) {
        r += m[i];

        continue;
      }
      var ki_s = k[j >= k.length ? j % k.length : j];
      //подгон ключа к сообщению/шифротексту (если короткий)
      var ki =
        typeof mode !== "undefined" && mode.indexOf("gronsfeld") !== -1
          ? parseInt(ki_s)
          : a.indexOf(ki_s);
      //вычитание при дешифровании, либо сложение.
      ki =
        typeof mode !== "undefined" && mode.indexOf("decrypt") !== -1
          ? -ki
          : ki;
      c = a[(a.length + (mi + ki)) % a.length]; //символ по таблице Виженера.
      c = mode === "shifted_atbash" ? a[a.length - 1 - a.indexOf(c)] : c; //Атбаш символа или символ.
      r += c; //Добавить символ к результату.
      j++;
    }
    return r; //вернуть строку результата
  }
}

module.exports = {
  VigenereCipheringMachine,
};
