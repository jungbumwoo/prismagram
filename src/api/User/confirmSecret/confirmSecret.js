import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../utils';

export default {
	Mutation: {
		confirmSecret: async (_, args, { request }) => {
			console.log(request);
			const { email, secret } = args;
			const user = await prisma.user({ email });
			if (user.loginSecret === secret) {
				return generateToken(user.id);
				//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrMTA3YXlmeTUyN2YwYjA5d3IyejE4YnEiLCJpYXQiOjE1Njk3Njg1OTl9.pzvSYKt0bB6QChnfk50bv41uRneS1ggr9u7DbuyM_CA
			} else {
				throw Error('Wrong email/secret combination');
			}
		}
	}
};
