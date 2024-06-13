import type { ToppingFlavor, ToppingAmount, Color } from "@prisma/client"

declare module '*.svg' {
  const value: any
  export = value
}

type TStringMap = {
  [key: string]: string
}

type TTopping = {
  id: string;
  type: ToppingFlavor;
  color: Color | null;
  amount: ToppingAmount | null;
  cupcakeId: string | null;
  price: number | null;
}
