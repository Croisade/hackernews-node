function feed(parent, input, context, info) {
  return context.prisma.link.findMany()
}

module.exports = {
  feed,
}
