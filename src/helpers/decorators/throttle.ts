export function throttle(ms = 500) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    //Salva o metodo original em uma variável
    const originalMethod = descriptor.value;

    let timer = 0;
    //Roda o método original e salva o retorno no descriptor
    descriptor.value = function (...args: any[]) {
      if (event) event.preventDefault();

      clearInterval(timer);

      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };

    return descriptor;
  };
}
