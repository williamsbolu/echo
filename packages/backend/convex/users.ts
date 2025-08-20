import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx, arg) => {
    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new Error("Not authenticated");
    }

    // ! i added the organisation id configuration to clerk jwt template, convex config on my clerk dashboard: 2:36:30
    // if the user dosen't belong to an organisation
    const orgId = identity.orgId as string;
    if (!orgId) {
      throw new Error("Missing organisation");
    }

    console.log({ orgId });

    const userId = await ctx.db.insert("users", {
      name: "Willy.dev",
    });
  },
});
