import { IconItem } from "@/types/icon";

import postgresqlIcon from "@/assets/icon/database/postgresql.png";
import mongodbIcon from "@/assets/icon/database/mongodb.png";
import redisIcon from "@/assets/icon/database/redis.png";

const POSTGRESQL : IconItem = {
  name: "PostgreSQL",
  category: "Databases",
  filename: "postgresql.png",
  description: "Open source relational database",
  tags: ["database", "sql", "postgresql"],
  hasImage: true,
  imageSrc: postgresqlIcon
}

const MONGODB : IconItem = {
  name: "MongoDB",
  category: "Databases",
  filename: "mongodb.png",
  description: "NoSQL document database",
  tags: ["database", "nosql", "mongodb"],
  hasImage: true,
  imageSrc: mongodbIcon
}

const REDIS : IconItem = {
  name: "Redis",
  category: "Databases",
  filename: "redis.png",
  description: "In-memory data structure store",
  tags: ["database", "cache", "redis"],
  hasImage: true,
  imageSrc: redisIcon
}

export const DATABASE = [
  POSTGRESQL,
  MONGODB,
  REDIS
];
