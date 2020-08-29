const { ApolloServer, gql } = require('apollo-server');
const fetch = require('node-fetch');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    products: [Product]!
    product(id: ID!): Product
    users: [User]!
    user(id: ID!): User
    carts: [Cart]!
    cart(id: ID!): Cart
  }
  
  type Mutation {
    addUser(email: String!, username: String!, password: String!): Response!
    deleteUser(id: ID!): Response!
    addProduct(product: ID!): Response!
    deleteProduct(id: ID!): Response!
    updateProduct(product: ID!): Response!
  }
  
  type Response {
    success: Boolean!
    message: String
  }

  type Product {
    id: ID!
    title: String!
    price: Float!
    category: String
    description: String
    image: String
  }
  
  type User {
    id: ID!
    email: String!
    username: String!
    name: Name!
    address: Address
    phone: String
  }
  
  type Name {
    firstname: String!
    lastname: String
  }
  
  type Address {
    city: String
    street: String
    Int: Int
    zipcode: String
  }

  type CartProduct {
    productId: ID!
    quantity: Int
  }
  
  type Cart {
    id: ID!
    userId: Int
    date: String
    products: [CartProduct]!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    products: () => {
      return fetch(`https://fakestoreapi.com/products/`)
        .then(res => res.json())
        .then(json => {
          return json;
        })
        .catch(error => {
          console.log(error);
        });
    },
    product: (parent, { id }) => {
      return fetch(`https://fakestoreapi.com/products/${id}`)
              .then(res => res.json())
              .then(json => {
                return json;
              })
              .catch(error => {
                console.log(error);
              });
    },
    users: () => {
      return fetch(`https://fakestoreapi.com/users/`)
        .then(res => res.json())
        .then(json => {
          return json;
        })
        .catch(error => {
          console.log(error);
        });
    },
    user: (parent, { id }) => {
      return fetch(`https://fakestoreapi.com/users/${id}`)
        .then(res => res.json())
        .then(json => {
          return json;
        })
        .catch(error => {
          console.log(error);
        });
    },
    carts: () => {
      return fetch(`https://fakestoreapi.com/carts/`)
        .then(res => res.json())
        .then(json => {
          return json;
        })
        .catch(error => {
          console.log(error);
        });
    },
    cart: (parent, { id }) => {
      return fetch(`https://fakestoreapi.com/carts/${id}`)
        .then(res => res.json())
        .then(json => {
          return json;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  Mutation: {
    addUser: (parent, { email, username, password }) => {
      return fetch(`https://fakestoreapi.com/users/`, {
        method: 'POST',
        body: JSON.stringify(
          {
            email: email,
            username: username,
            password: password,
            name: {
              firstname: 'John',
              lastname: 'Doe',
            },
            address: {
              city: 'kilcoole',
              street: '7835 new road',
              number: 3,
              zipcode: '12926-3874',
              geolocation: {
                lat: '-37.3159',
                long: '81.1496',
              },
            },
            phone: '1-570-236-7033',
          }
        ),
      })
        .then(res => res.json())
        .then(json => {
          console.log(JSON.stringify(json));

          if (json) {
            return {
              success: true,
              message: 'пользователь добавлен',
            }
          } else {
            throw new Error();
          }
        })
        .catch(error => {
          console.log(error);

          return {
            success: false,
            message: 'ошибка',
          }
        });
    },
    deleteUser: (parent, { id }) => {
      return fetch(`https://fakestoreapi.com/users/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(json => {
          if (json) {
            return {
              success: true,
              message: 'пользователь удален',
            }
          } else {
            throw new Error();
          }
        })
        .catch(error => {
          console.log(error);

          return {
            success: false,
            message: 'ошибка',
          }
        });
    },
    deleteProduct: (parent, { id }) => {
      return fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(json => {
          if (json) {
            return {
              success: true,
              message: 'товар удален',
            }
          } else {
            throw new Error();
          }
        })
        .catch(error => {
          console.log(error);

          return {
            success: false,
            message: 'ошибка',
          }
        });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
