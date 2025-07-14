import { users, contactMessages } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
export class DatabaseStorage {
    async getUser(id) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user || undefined;
    }
    async getUserByUsername(username) {
        const [user] = await db.select().from(users).where(eq(users.username, username));
        return user || undefined;
    }
    async createUser(insertUser) {
        const [user] = await db
            .insert(users)
            .values(insertUser)
            .returning();
        return user;
    }
    async createContactMessage(insertMessage) {
        const [message] = await db
            .insert(contactMessages)
            .values(insertMessage)
            .returning();
        return message;
    }
    async getContactMessages() {
        const messages = await db.select().from(contactMessages);
        return messages.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    async markMessageAsRead(id) {
        await db
            .update(contactMessages)
            .set({ isRead: true })
            .where(eq(contactMessages.id, id));
    }
}
export const storage = new DatabaseStorage();
