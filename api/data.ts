import { $Enums, Prisma } from '@prisma/client'

interface FakeCupcakePayload {
  flavor: true
  color: true
  icingTexture: true
  icingColor: true
  icingFlavor: true
  toppings: true
  caseColor: true
}

const fakeCupcakes: Prisma.CupcakeGetPayload<{
  include: FakeCupcakePayload
}>[] = [
  // Double Chocolate Cupcake
  {
    id: '1',
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
        price: null,
        amount: null,
        cupcakeId: null,
      },
    ],
    price: 0,
    orderId: null,
  },
  // Vanilla Cupcake
  {
    id: '2',
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
        price: null,
        amount: null,
        cupcakeId: null,
      },
      {
        id: '3',
        color: $Enums.Color.PINK,
        type: $Enums.ToppingFlavor.SPRINKLES,
        price: null,
        amount: null,
        cupcakeId: null,
      },
      {
        id: '4',
        color: $Enums.Color.MATCH_FLAVOR,
        type: $Enums.ToppingFlavor.CHOCOLATE_BARS,
        price: null,
        amount: null,
        cupcakeId: null,
      },
    ],
    price: 0,
    orderId: null,
  },
  // Raspberry Cupcake
  {
    id: '3',
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
        price: null,
        amount: null,
        cupcakeId: null,
      },
    ],
    price: 2,
    orderId: null,
  },
  // Chocolate Cupcake
  {
    id: '4',
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
        price: null,
        amount: null,
        cupcakeId: null,
      },
      {
        id: '6',
        color: $Enums.Color.RAINBOW,
        type: $Enums.ToppingFlavor.SPRINKLES,
        price: null,
        amount: null,
        cupcakeId: null,
      },
    ],
    price: 2,
    orderId: null,
  },
  // Strawberry Cupcake
  {
    id: '4',
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
        price: null,
        amount: $Enums.ToppingAmount.LOTS,
        cupcakeId: null,
      },
    ],
    price: 2,
    orderId: null,
  },
]

const fakeOrders: Prisma.OrderGetPayload<{
  include: {
    cupcakes: {
      include: FakeCupcakePayload
    }
  }
}>[] = []

const fakeDatabase = {
  async getCupcakes() {
    return fakeCupcakes
  },

  async getCupcakeById(id: string) {
    return fakeCupcakes.find((cupcake) => cupcake.id === id)
  },

  async createCupcake(cupcake: Prisma.CupcakeCreateInput) {
    fakeCupcakes.push(
      cupcake as unknown as Prisma.CupcakeGetPayload<{
        include: FakeCupcakePayload
      }>,
    )
    return cupcake
  },

  async updateCupcake(id: string, cupcake: Prisma.CupcakeUpdateInput) {
    const index = fakeCupcakes.findIndex((cupcake) => cupcake.id === id)
    if (index === -1) {
      return null
    }
    fakeCupcakes[index] = {
      ...fakeCupcakes[index],
      ...(cupcake as unknown as Prisma.CupcakeGetPayload<{
        include: FakeCupcakePayload
      }>),
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

  async createOrder(order: Prisma.OrderCreateInput) {
    fakeOrders.push(
      order as unknown as Prisma.OrderGetPayload<{
        include: {
          cupcakes: {
            include: FakeCupcakePayload
          }
        }
      }>,
    )
    return order
  },

  async updateOrder(id: string, order: Prisma.OrderUpdateInput) {
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
    return order
  },

  async deleteOrder(id: string) {
    const index = fakeOrders.findIndex((order) => order.id === id)
    if (index === -1) {
      return null
    }
    fakeOrders.splice(index, 1)
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
    return order
  },
}

const fakeAdminUserName = 'admin'
const fakeAdminPassword = 'password'

export { fakeDatabase, fakeAdminUserName, fakeAdminPassword }
