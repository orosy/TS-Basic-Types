function returnVoid(message: string): void {
  console.log(message);

  // undefined만 유일하게 void에 할당 가능
  return undefined;
}

// return을 막을 때 주로 활용
returnVoid("리턴이 없다.");
