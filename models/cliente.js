module.exports = class Cliente {
  constructor(id = 0, nome = "", telefone = "") {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
  }

  nomeUppercase() {
    return this.nome.toUpperCase();
  }

  static primeiro() {
    return new Cliente();
  }

  static todos() {
    return [
      new Cliente(1, "Matheus", "123456"),
      new Cliente(2, "Matheus", "123456"),
      new Cliente(3, "Matheus", "123456"),
      new Cliente(4, "Matheus", "123456"),
      new Cliente(5, "Matheus", "123456"),
      new Cliente(6, "Matheus", "123456"),
      new Cliente(7, "Matheus", "123456"),
      new Cliente(8, "Matheus", "123456"),
      new Cliente(9, "Matheus", "123456"),
      new Cliente(10, "Matheus", "123456"),
    ];
  }
};
