# TypeScript 학습

## Fist Type Annotation

```tsx
let a: string;

a = "Mark"; // YES
a = 39; // NO

function hello(b: number) {}

hello(39); // YES
hello("Mark"); // NO
```

<br/>

## TS Type & JS Type

### Static Types

- set during development

### Dynamic Types

- resolved at runtime

```tsx
// JS
function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }
  return n1 + n2;
}

const result = add(39, 28);

// TS
function add(n1: number, n2: number) {
  return n1 + n2;
}

const result = add(39, 28);
```

TypeScript에서 우리는 JavaScript 에서 기대하는 것과 동일한 타입을 지원하며, 돕기 위해 추가적인 열거 타입이 제공되었습니다.

<br/>

## Data Type

- TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
- **사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개집니다.**
- JavaScript 기본 자료형을 포함(superset)
  - **ECMAScript 표준에 따른 기본 자료형은 6가지**
    - Boolean
    - Number
    - String
    - Null
    - Undefined
    - Symbol (ECMAScript 6에 추가)
    - Array: object 형
- **프로그래밍을 도울 몇가지 타입이 더 제공**
  - Any, Void, Never, Unknown
  - Enum
  - Tuple: object형

<br/>

## Primitive Type

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형입니다.
- Primitive 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분
- (ES2015 기준) 6가지
  - boolean
  - number
  - string
  - symbol (ES2015)
  - null
  - undefined
- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
  - true;
  - 'hello';
  - 3.14;
  - null;
  - undefined;
- 또는 래퍼 객체로 만들 수 있다.
  - new Boolean(false); // typeof new Boolean(false) : 'object'
  - new String('world'); // typeof new String('world') : 'object'
  - new Number(42); // type of new Number(42) : 'object'

<br/>

## Symbol

- Primitive 타입의 값을 담아서 사용합니다.
- 고유하고 수정불가능한 값으로 만들어줍니다.
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많습니다.

<br/>

## Undefined & Null

- TS에서 undefined와 null은 실제로 각각 undefined와 null이라는 타입을 가집니다.
- void와 마찬가지로, 그 자체로는 그다지 유용하지 않습니다.
- 둘다 소문자만 존재합니다.

<br/>

## Undefined & null are subtypes of all other types.

- 설정을 하지 않으면 그렇습니다.
- number에 null 또는 undefined 를 할당할 수 있다는 의미입니다.
- 하지만, 컴파일 옵션에서 `--strictNullChecks`를 사용하면, null과 undefined는 void나 자기 자신들에게만 할당할 수 있습니다.
  - 이 경우, null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 합니다.

<br/>

## Null in JS

- null 이라는 값으로 할당된 것을 null 이라고 합니다.
- 무언가가 있는데, 사용할 준비가 덜 된 상태.
- null 이라는 타입은 null 이라는 값만 가질 수 있습니다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, object입니다.**

<br/>

## Undefined in JS

- 값을 할당하지 않은 변수는 undefined 라는 값을 가집니다.
- 무언가가 아예 준비가 안된 상태
- object의 property가 없을 때도 undefined 입니다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, undefined 입니다.**

<br/>

## Object

- **"primitive type이 아닌 것"** 을 나타내고 싶을 때 사용하는 타입

<br/>

## non-primitive type

- not number, string, boolean, bigint, symbol, null, or undefined

```tsx
let obj: object = {};

obj = { name: "Mark" };

obj = [{ name: "Mark" }];

obj = 39; // Error

obj = true; // Error

obj = null; // Error
```

## Array

- 원래 JS에서 array는 객체입니다.
- 사용방법
  - Array<타입>
  - 타입[]

```tsx
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];
```

## Any

- 어떤 타입이어도 상관없는 타입
- any를 최대한 쓰지 않는 것이 핵심
- 컴파일 타임에 타입 체크가 정상적으로 이루어지지 않음
- 따라서 컴파일 옵션 중에는 any를 써야하지만 쓰지 않을 시 오류를 리턴하도록 하는 옵션 있음
  - noImplicitAny
- any는 계속하여 개체를 통해 전파됨(The any will continue to propagate through your objects)
- 결국, 모든 편의는 타입 안정성을 잃는 대가로 온다는 것
- **타입 안정성은 TS를 사용하는 주요 동기 중 하나이며, 필요하지 않은 경우에는 any를 사용하지 않도록 해야 합니다.**

<br/>

## Unknown

- 응용프로그램을 작성할 때 모르는 변수의 타입을 묘사해야할 수 있음
- 이러한 값은 동적 콘텐츠(예: 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 수 있음)
- 이 경우, 컴파일러와 추후 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 것을 제공하기를 원하므로 unknown 타입을 제공
- TypeScript 3.0 버전부터 지원
- any와 짝으로 any 보다 Type-safe한 타입
  - any와 같이 모든 타입 할당할 수 있음
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나,
  - 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없다.
- unknown 타입을 사용하면 runtime error를 줄일 수 있음
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있음

<br/>

## Never

- never 타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있음
- 하지만, never에는 그 어떤 것도 할당할 수 없음
- any 조차도 never 에게 할당할 수 없음
- 잘못된 타입을 넣는 실수를 막고자할 때 많이 사용됨
