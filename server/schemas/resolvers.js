const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
      
      // user: async (parent, { username }) => {
      //   return await User.findOne({ username }).populate('User');
      // },
    books: async (parent, { title }) => {
      const params = await title ? { title } : {};
      return Book.find(params);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ username: context.user.username }).populate('User');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { newBook }) => {

      const updatedUser = await User.findOneAndUpdate(
        {username: context.user.username },
        { $addToSet: { savedBooks: newBook } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    // addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     {
    //       $addToSet: { comments: { commentText, commentAuthor } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeThought: async (parent, { thoughtId }) => {
    //   return Thought.findOneAndDelete({ _id: thoughtId });
    // },
    deleteBook: async (parent, { bookId }) => {
      const updatedUser = await User.findOneAndDelete(
        { username: context.user.username },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
      return updatedUser;
    },
  },
};

module.exports = resolvers;
