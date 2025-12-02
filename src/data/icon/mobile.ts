import { IconItem } from "@/types/icon";

import kotlinIcon from "@/assets/icon/mobile/kotlin.png";
import swiftIcon from "@/assets/icon/mobile/swift.png";
import playstoreIcon from "@/assets/icon/mobile/playstore.png";
import appstoreIcon from "@/assets/icon/mobile/appstore.png";

const KOTLIN : IconItem = {
  name: "Kotlin",
  category: "Mobile",
  filename: "kotlin.png",
  description: "Modern programming language for Android development",
  tags: ["kotlin", "android", "mobile", "programming", "language"],
  hasImage: true,
  imageSrc: kotlinIcon
}

const SWIFT : IconItem = {
  name: "Swift",
  category: "Mobile",
  filename: "swift.png",
  description: "Powerful programming language for iOS development",
  tags: ["swift", "ios", "mobile", "programming", "language", "apple"],
  hasImage: true,
  imageSrc: swiftIcon
}

const PLAYSTORE : IconItem = {
  name: "Google Play Store",
  category: "Mobile",
  filename: "playstore.png",
  description: "Official app store for Android devices",
  tags: ["playstore", "play store", "google", "android", "mobile", "app store"],
  hasImage: true,
  imageSrc: playstoreIcon
}

const APPSTORE : IconItem = {
  name: "Apple App Store",
  category: "Mobile",
  filename: "appstore.png",
  description: "Official app store for iOS devices",
  tags: ["appstore", "app store", "apple", "ios", "mobile"],
  hasImage: true,
  imageSrc: appstoreIcon
}

export const MOBILE = [
  KOTLIN,
  SWIFT,
  PLAYSTORE,
  APPSTORE
];