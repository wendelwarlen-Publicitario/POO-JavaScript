class Funcionario {
  #salario;

  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.#salario = salario;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e atuo como ${this.cargo}.`;
  }

  calcularBonus() {
    // Regra base: 10% do salário
    return this.#salario * 0.10;
  }

  verSalario() {
    return this.#salario;
  }

  aumentarSalario(valor) {
    if (valor <= 0) {
      console.log("O valor do aumento deve ser maior que zero.");
      return;
    }
    this.#salario += valor;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, salario, linguagem) {
    super(nome, "Desenvolvedor", salario);
    this.linguagem = linguagem;
  }

  apresentar() {
    return `${super.apresentar()} Especialidade em ${this.linguagem}.`;
  }

  calcularBonus() {
    // Regra específica: 20% do salário
    return this.verSalario() * 0.20;
  }
}

class Designer extends Funcionario {
  constructor(nome, salario, ferramenta) {
    super(nome, "Designer", salario);
    this.ferramenta = ferramenta;
  }

  apresentar() {
    return `${super.apresentar()} Ferramenta principal: ${this.ferramenta}.`;
  }

  calcularBonus() {
    // Regra específica: 15% do salário
    return this.verSalario() * 0.15;
  }
}

// --- Teste do programa ---
const dev = new Desenvolvedor("Ana Silva", 6000, "JavaScript");
const designer = new Designer("Lucas Costa", 4500, "Figma");

console.log("=== DESENVOLVEDOR ===");
console.log(dev.apresentar());
console.log(`Salário atual: R$ ${dev.verSalario().toFixed(2)}`);
console.log(`Bônus calculado: R$ ${dev.calcularBonus().toFixed(2)}`);

console.log("\n=== DESIGNER ===");
console.log(designer.apresentar());
console.log(`Salário atual: R$ ${designer.verSalario().toFixed(2)}`);
console.log(`Bônus calculado: R$ ${designer.calcularBonus().toFixed(2)}`);