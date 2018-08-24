import { ServiceBroker } from "moleculer";

import TestService from "../../src/one.service";

describe("Test 'one' service", () => {
	let broker = new ServiceBroker();
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'greeter.sum' action with {a: 2, b: 1 }", () => {

		it("should return with 3", () => {
			expect(broker.call("one.sum", { a: 2, b: 1 })).resolves.toBe(3);
		});

	});
});
