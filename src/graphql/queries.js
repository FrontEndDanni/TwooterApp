const { GraphQLList, GraphQLString } = require ( 'graphql');
const { UserType } = require('./types');
const { User, Post } = require('../models');


//all users query
const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users in database',
    resolve(parent,args){
        return User.find()
    }
}

//post all query
const posts = {
    type: new GraphQLList(Post),
    description: 'Query all posts',
    resolve(parent, args){
        return Post.find()
    }
}
//post id query
const postById = {
    type: new Post,
    description: 'Query posts by ID',
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent,args){
        return Post.findById(args.id)
    }
}
//users by id
const user = {
    type: UserType,
    description: 'Query users by ID',
    args: {
        id: {type: GraphQLString}
    },
    async resolve(parent, args){
        return User.findById(args.id)
    }
}

module.exports = {users, user, posts, postById}