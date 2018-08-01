const queryEntryPoints = `
  type Query {
    # get Member by email
    member(email: String!): Member
  }
`;
export default queryEntryPoints;
