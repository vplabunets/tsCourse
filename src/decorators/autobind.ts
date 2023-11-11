//autobind decorator

export function autobind(
  target: any,
  methodName: string,
  decsriptor: PropertyDescriptor
) {
  const origignalMethod = decsriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = origignalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}
