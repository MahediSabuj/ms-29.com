import { IconItem } from "@/types/icon";

import prometheusIcon from "@/assets/icon/monitoring/prometheus.png";
import grafanaIcon from "@/assets/icon/monitoring/grafana.png";

const PROMETHEUS : IconItem = {
  name: "Prometheus",
  category: "Monitoring",
  filename: "prometheus.png",
  description: "Collects and stores time-series metrics data from applications",
  tags: ["monitoring", "prometheus", "metrics", "alerting", "timeseries"],
  hasImage: true,
  imageSrc: prometheusIcon
}

const GRAFANA : IconItem = {
  name: "Grafana",
  category: "Monitoring",
  filename: "grafana.png",
  description: "Visualization platform that displays metrics from Prometheus and other sources",
  tags: ["monitoring", "grafana", "analytics", "observability", "visualization", "dashboard"],
  hasImage: true,
  imageSrc: grafanaIcon
}

export const MONITORING = [
  PROMETHEUS,
  GRAFANA
];
