exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}

exports.createSchemaCustomization = ({ actions, createContentDigest }) => {
  const { createTypes, createFieldExtension } = actions

  /**
   * https://github.com/zslabs/gatsby-plugin-mdx-frontmatter
   * Modified to add config option to choose what field MDX will transform
   * allowing you to keep the original field and create a new transformed one
   * in your typeDef.
   */
  createFieldExtension({
    name: `mdx`,
    args: {
      field: {
        type: `String`,
        defaultValue: ``,
      },
    },
    extend(options) {
      return {
        type: `String`,
        resolve(source, args, context, info) {
          const value = options.field
            ? source[options.field]
            : source[info.fieldName]

          if (typeof value === `undefined`) return null

          const mdxType = info.schema.getType(`Mdx`)
          const { resolve } = mdxType.getFields().body

          return resolve(
            {
              rawBody: value,
              internal: {
                contentDigest: createContentDigest(value),
              },
            },
            args,
            context,
            info
          )
        },
      }
    },
  })

  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      mdxTitle: String! @mdx(field:"title")
      image: String
      category: [String!]!
      date: Date! @dateformat(formatString: "YYYY-MM-DD")
    }
  `
  createTypes(typeDefs)
}
