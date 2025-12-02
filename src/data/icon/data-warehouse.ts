import { IconItem } from "@/types/icon";

import snowflakeIcon from "@/assets/icon/warehouse/snowflake.png";
import redshiftIcon from "@/assets/icon/warehouse/redshift.png";
import bigqueryIcon from "@/assets/icon/warehouse/bigquery.png";

const SNOWFLAKE : IconItem = {
  name: "Snowflake",
  category: "Data Warehouse",
  filename: "snowflake.png",
  description: "Cloud data warehouse platform for data storage and analytics",
  tags: ["snowflake", "data warehouse", "cloud", "analytics", "data platform"],
  hasImage: true,
  imageSrc: snowflakeIcon
}

const REDSHIFT : IconItem = {
  name: "Amazon Redshift",
  category: "Data Warehouse",
  filename: "redshift.png",
  description: "AWS cloud data warehouse for big data analytics",
  tags: ["redshift", "aws", "data warehouse", "amazon", "analytics", "cloud"],
  hasImage: true,
  imageSrc: redshiftIcon
}

const BIGQUERY : IconItem = {
  name: "Google BigQuery",
  category: "Data Warehouse",
  filename: "bigquery.png",
  description: "Serverless data warehouse by Google Cloud for analytics",
  tags: ["bigquery", "google", "gcp", "data warehouse", "analytics", "cloud", "serverless"],
  hasImage: true,
  imageSrc: bigqueryIcon
}

export const DATA_WAREHOUSE = [
  SNOWFLAKE,
  REDSHIFT,
  BIGQUERY
];