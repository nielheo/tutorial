import Member from "./member/member.type";
import MemberFacebook from "./memberFacebook/memberFacebook.type";

import RootQuery from "./rootquery/rootquery.type";

import resolvers from "./resolvers";

const typeDefs = [Member, MemberFacebook, RootQuery];

export { typeDefs, resolvers };
