const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    // Escreva dois testes,
    // um que verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu 
    const menu = createMenu({ food: {pizza: 10, hamburger: 8}, drinks: {coke: 3, juice: 5} })
    expect(menu).toHaveProperty('fetchMenu');
    // e outro verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.
    expect(typeof menu.fetchMenu).toBe('function')
      // Escreva um teste que verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um 
      // objeto cujas chaves são somente food e drinks.
    expect(Object.keys(fetchMenu)).toEqual(['food', 'drinks'])  
    // Escreva um teste que verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 
    // createMenu({ food: {}, drinks: {} }).fetchMenu().
    expect(menu.fetchMenu()).toEqual(createMenu)
    // Escreva um teste que verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }),
    // após a criação do menu, retorna um array vazio.
    expect(menu.consumption).toEqual([])
    // Escreva um teste para a seguinte situação: caso o valor (que nesse caso é uma string) passada por parâmetro para order não 
    // conste no objeto passado como parâmetro para createMenu (nem em food ou drinks), o retorno da chave order deve ser:
      // exibir a mensagem "Item indisponível";
      // e não alterar a chave consumption.  
      // Caso o valor exista no objeto passado como parâmetro para createMenu o item deve ser adicionado ao array consumption.
    const initialConsumption = menu.consumption.slice(); // cria uma cópia da chave consumption (usei slice que o noel explicou ontem)
    expect(menu.order("hotdog")).toBe("Item indisponível");
    expect(menu.consumption).toEqual(initialConsumption); 
    // Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém 
    // os itens pedidos.
    menu.order("pizza");
    menu.order("biscoito");
    menu.order("hamburguer")
    expect(menu.consumption).toEqual(["pizza","biscoito","hamburguer"]);
    // Escreva um teste que verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption.
    menu.order("pizza");
    menu.order("biscoito");
    menu.order("pizza")
    expect(menu.consumption).toEqual(["pizza", "biscoito", "pizza"]);
    // Escreva um teste que verifica que, ao chamar a função pay() que será uma propriedade do objeto retornado pela função createMenu, 
    // deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption. 
    // A propriedade pay tem como valor uma função.
          menu.order("coke");
      menu.order("pizza");
      menu.order("juice");
      expect(menu.pay()).toBe(18);
  });
});
