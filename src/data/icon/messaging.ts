import { IconItem } from "@/types/icon";

import kafkaIcon from "@/assets/icon/messaging/kafka.png";
import rabbitmqIcon from "@/assets/icon/messaging/rabbitmq.png";

const KAFKA : IconItem = {
  name: "Apache Kafka",
  category: "Messaging",
  filename: "kafka.png",
  description: "Distributed event streaming platform for high-performance data pipelines",
  tags: ["kafka", "messaging", "streaming", "event", "apache"],
  hasImage: true,
  imageSrc: kafkaIcon
}

const RABBITMQ : IconItem = {
  name: "RabbitMQ",
  category: "Messaging",
  filename: "rabbitmq.png",
  description: "Open-source message broker for asynchronous communication",
  tags: ["rabbitmq", "messaging", "queue", "broker", "amqp"],
  hasImage: true,
  imageSrc: rabbitmqIcon
}

export const MESSAGING = [
  KAFKA,
  RABBITMQ
];