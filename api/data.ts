import { $Enums, Prisma } from '@prisma/client'
import EnglishPitch from './locales/en/pitch.json'
import RussianPitch from './locales/ru/pitch.json'

interface FakeCupcakePayload {
  pitch: true
  slug: true
  flavor: true
  color: true
  icingTexture: true
  icingColor: true
  icingFlavor: true
  toppings: true
  caseColor: true
  orders: true
}

interface FakePitchPayload {
  language: true
  title: true
  text: true
  cupcake: true
}

export interface ICupcakeData extends Prisma.CupcakeGetPayload<{
  include: FakeCupcakePayload
}> {}

export interface IPitchData extends Prisma.CopyGetPayload<{
  include: FakePitchPayload
}> {}

interface IOrderData extends Prisma.OrderGetPayload<{
  include: {
    cupcakes: {
      include: FakeCupcakePayload
    }
  }
}> {}

export interface IPitch {
  [key: string]: IPitchData[]
}

function getPitchByCupcakeId(cupcakeId: string): Prisma.CopyGetPayload<{
  include: FakePitchPayload
}>[] {
  const enPitch = (EnglishPitch as unknown as IPitch)[`pitch.${cupcakeId}`]
  const ruPitch = (RussianPitch as unknown as IPitch)[`pitch.${cupcakeId}`]
  return [...enPitch, ...ruPitch]
}

async function syncStandardCupcakeOrders(cupcakes: ICupcakeData[], order: IOrderData) {
  const standardFlavors = cupcakes.filter((cupcake) => !!cupcake.slug)

  if (!standardFlavors.length) {
    return null
  }

  await standardFlavors.forEach((cupcake) => {
    const standardCupcake = fakeCupcakes.find((standard) => standard.slug === cupcake.slug)

    if (!standardCupcake) {
      return
    }

    standardCupcake.orders.find((order) => order.id === order.id) || standardCupcake.orders.push(order)
  })
}

const fakeCupcakes: ICupcakeData[] = [
  // Double Chocolate Cupcake
  {
    id: '1',
    slug: 'double-chocolate-cupcake',
    pitch: getPitchByCupcakeId('1'),
    caseColor: $Enums.CaseColor.LIGHT,
    color: $Enums.Color.MATCH_FLAVOR,
    flavor: $Enums.Flavor.CHOCOLATE,
    icingColor: $Enums.Color.MATCH_FLAVOR,
    icingFlavor: $Enums.IcingFlavor.CHOCOLATE,
    icingTexture: $Enums.IcingTexture.SWIRL,
    toppings: [
      {
        id: '1',
        color: $Enums.Color.WHITE,
        type: $Enums.ToppingFlavor.HEARTS,
        price: 0,
        amount: null,
        cupcakeId: '1',
      },
    ],
    price: 2.39,
    orders: [],
  },
  // Vanilla Cupcake
  {
    id: '2',
    slug: 'vanilla-cupcake',
    pitch: getPitchByCupcakeId('2'),
    caseColor: $Enums.CaseColor.LIGHT,
    color: $Enums.Color.MATCH_FLAVOR,
    flavor: $Enums.Flavor.VANILLA,
    icingColor: $Enums.Color.MATCH_FLAVOR,
    icingFlavor: $Enums.IcingFlavor.VANILLA,
    icingTexture: $Enums.IcingTexture.SWIRL,
    toppings: [
      {
        id: '2',
        color: $Enums.Color.MATCH_FLAVOR,
        type: $Enums.ToppingFlavor.CHOCOLATE_CHIPS,
        price: 0,
        amount: null,
        cupcakeId: '2',
      },
      {
        id: '3',
        color: $Enums.Color.PINK,
        type: $Enums.ToppingFlavor.SPRINKLES,
        price: 0,
        amount: null,
        cupcakeId: '2',
      },
      {
        id: '4',
        color: $Enums.Color.MATCH_FLAVOR,
        type: $Enums.ToppingFlavor.CHOCOLATE_BARS,
        price: 0,
        amount: null,
        cupcakeId: '2',
      },
    ],
    price: 2.49,
    orders: [],
  },
  // Raspberry Cupcake
  {
    id: '3',
    slug: 'raspberry-cupcake',
    pitch: getPitchByCupcakeId('3'),
    caseColor: $Enums.CaseColor.LIGHT,
    color: $Enums.Color.RED,
    flavor: $Enums.Flavor.RASPBERRY,
    icingColor: $Enums.Color.RED,
    icingFlavor: $Enums.IcingFlavor.VANILLA,
    icingTexture: $Enums.IcingTexture.SWIRL,
    toppings: [
      {
        id: '5',
        color: $Enums.Color.WHITE,
        type: $Enums.ToppingFlavor.HEARTS,
        price: 0,
        amount: null,
        cupcakeId: '3',
      },
    ],
    price: 2.39,
    orders: [],
  },
  // Chocolate Cupcake
  {
    id: '4',
    slug: 'chocolate-cupcake',
    pitch: getPitchByCupcakeId('4'),
    caseColor: $Enums.CaseColor.DARK,
    color: $Enums.Color.MATCH_FLAVOR,
    flavor: $Enums.Flavor.CHOCOLATE,
    icingColor: $Enums.Color.MATCH_FLAVOR,
    icingFlavor: $Enums.IcingFlavor.VANILLA,
    icingTexture: $Enums.IcingTexture.ROUND,
    toppings: [
      {
        id: '6',
        color: $Enums.Color.RAINBOW,
        type: $Enums.ToppingFlavor.SPRINKLES,
        price: 0,
        amount: null,
        cupcakeId: '4',
      },
    ],
    price: 2,
    orders: [],
  },
  // Strawberry Cupcake
  {
    id: '5',
    slug: 'strawberry-cupcake',
    pitch: getPitchByCupcakeId('5'),
    caseColor: $Enums.CaseColor.LIGHT,
    color: $Enums.Color.MATCH_FLAVOR,
    flavor: $Enums.Flavor.STRAWBERRY,
    icingColor: $Enums.Color.MATCH_FLAVOR,
    icingFlavor: $Enums.IcingFlavor.STRAWBERRY,
    icingTexture: $Enums.IcingTexture.ROUND,
    toppings: [
      {
        id: '7',
        color: $Enums.Color.MATCH_FLAVOR,
        type: $Enums.ToppingFlavor.CHERRY,
        price: 0,
        amount: $Enums.ToppingAmount.LOTS,
        cupcakeId: '5',
      },
    ],
    price: 2,
    orders: [],
  },
]

const fakeOrders: Prisma.OrderGetPayload<{
  include: {
    cupcakes: {
      include: FakeCupcakePayload
    }
  }
}>[] = []

const fakeMessages: TStringMap[] = []

const fakeDatabase = {
  async getCupcakes() {
    return fakeCupcakes
  },

  async getCupcakeById(id: string) {
    return fakeCupcakes.find((cupcake) => cupcake.id === id)
  },

  async getCupcakeBySlug(slug: string) {
    return fakeCupcakes.find((cupcake) => cupcake.slug === slug)
  },

  async createCupcake(cupcake: ICupcakeData) {
    fakeCupcakes.push(cupcake)

    return cupcake
  },

  async updateCupcake(id: string, cupcake: ICupcakeData) {
    const index = fakeCupcakes.findIndex((cupcake) => cupcake.id === id)
    if (index === -1) {
      return null
    }
    fakeCupcakes[index] = {
      ...fakeCupcakes[index],
      ...(cupcake),
    }
    return cupcake
  },

  async deleteCupcake(id: string) {
    const index = fakeCupcakes.findIndex((cupcake) => cupcake.id === id)
    if (index === -1) {
      return null
    }
    fakeCupcakes.splice(index, 1)
    return id
  },

  async getOrders() {
    return fakeOrders
  },

  async getOrderById(id: string) {
    return fakeOrders.find((order) => order.id === id)
  },

  async createOrder(order: IOrderData) {
    fakeOrders.push(order)
    
    // Track cupcakes with standard flavors
    const orderCupcakes = order.cupcakes as ICupcakeData[]

    if (!orderCupcakes.length) {
      return order
    }

    await syncStandardCupcakeOrders(orderCupcakes, order)

    return order
  },

  async updateOrder(id: string, order: IOrderData) {
    const index = fakeOrders.findIndex((order) => order.id === id)
    if (index === -1) {
      return null
    }
    fakeOrders[index] = {
      ...fakeOrders[index],
      ...(order as unknown as Prisma.OrderGetPayload<{
        include: { cupcakes: { include: FakeCupcakePayload } }
      }>),
    }

    // Track cupcakes with standard flavors
    const orderCupcakes = order.cupcakes as ICupcakeData[]
    if (!orderCupcakes.length) {
      return order
    }

    await syncStandardCupcakeOrders(orderCupcakes, order)

    return order
  },

  async deleteOrder(id: string) {
    const index = fakeOrders.findIndex((order) => order.id === id)
    if (index === -1) {
      return null
    }
    fakeOrders.splice(index, 1)

    // Remove order from standard cupcakes
    fakeCupcakes.forEach((cupcake) => {
      const orderIndex = cupcake.orders.findIndex((order) => order.id === id)
      if (orderIndex === -1) {
        return
      }
      cupcake.orders.splice(orderIndex, 1)
    })

    return id
  },

  async addCupcakeToOrder(orderId: string, cupcakeId: string) {
    const order = fakeOrders.find((order) => order.id === orderId)
    if (!order) {
      return null
    }
    const cupcake = fakeCupcakes.find((cupcake) => cupcake.id === cupcakeId)
    if (!cupcake) {
      return null
    }
    order.cupcakes.push(cupcake)

    syncStandardCupcakeOrders([cupcake], order)
    return order
  },

  async getMessages() {
    return fakeMessages
  },

  async createMessage(message: TStringMap) {
    fakeMessages.push(message)
    return message
  },

  async deleteMessage(id: string) {
    const index = fakeMessages.findIndex((message) => message.id === id)
    if (index === -1) {
      return null
    }
    fakeMessages.splice(index, 1)
    return id
  },
}

const fakeAdminUserName = 'admin'
const fakeAdminPassword = 'password'

export { fakeDatabase, fakeAdminUserName, fakeAdminPassword }
