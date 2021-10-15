declare const maybe: unknown;

// const aNumber: number = maybe;

// Type Guard 1
if (maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
}

// Type Guard 2
if (typeof maybe === "string") {
  const aString: string = maybe;

  // const aBoolean: boolean = maybe;
}
