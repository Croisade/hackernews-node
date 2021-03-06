const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')


const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

const prisma = new PrismaClient()

// 2
const resolvers = {
  Query,
  Mutation,
  User,
  Link,
}

// 3
const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
