import { gql } from 'apollo-server-core';


const commonExtensions = gql `

    type TokenDetails implements Node{
        id: ID!
        token: String!
        monthExp: String!
        yearExp: String!
        approvalNumber: String!
        identityNumber: String!
        cardOwnerName: String!
        cardOwnerEmail: String!
        salt: String!
        cardOwnerId: Int!
        cardOwnerPhone: String!    
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    input TokenDetailsAddToken{
        token: String!
        monthExp: String!
        yearExp: String!
        approvalNumber: String!
        identityNumber: String!
        cardOwnerName: String!
        cardOwnerEmail: String!
        salt: String!
        cardOwnerId: Int!
        cardOwnerPhone: Int!    
    }

    input TokenDetailsUpdateInput{
        token: String!
        monthExp: String!
        yearExp: String!
        approvalNumber: String!
        identityNumber: String!
        cardOwnerName: String!
        cardOwnerEmail: String!
        salt: String!
        cardOwnerId: Int!
        cardOwnerPhone: String!    
    }

`



export const shopApiExtensions = gql`
    ${commonExtensions}
	
	extend type Mutation {
        addToken(input:TokenDetailsAddToken!): TokenDetails!
    }

    extend type Query {
		TokenDetails(token:String!): TokenDetails
    }
`

export const adminApiExtensions = gql`
	${commonExtensions}

    type TokenDetailsList implements PaginatedList {
        items: [TokenDetails!]!
        totalItems: Int!
    }

    extend type Query {
        TokenDetailsAll(options: TokenDetailsListOptions): TokenDetailsList!
		TokenDetails(token:String!): TokenDetails
    }

    extend type Mutation {
        addTokenDetails(input:TokenDetailsAddToken!): TokenDetails!
		updateTokenDetails(input:TokenDetailsUpdateInput!): TokenDetails!
		deleteTokenDetails(token:String!): TokenDetails!
		deleteAllTokenDetails: Boolean!
    }
	input TokenDetailsListOptions


`
