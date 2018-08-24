import sum from './lib/sum';

export default {

	name: "one",

	actions: {
    sum(ctx) {
      const { a, b } = ctx.params;
			return sum(a, b);
		}
	}

};
