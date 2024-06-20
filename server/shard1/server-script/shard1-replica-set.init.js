rs.initiate(
	{
		_id: "shard1-replica-set",
		members: [
			{ _id : 0, host : "shard1-serverA:27018" },
			{ _id : 1, host : "shard1-serverB:27018" },
			{ _id : 2, host : "shard1-serverC:27018" }
		]
	}
);