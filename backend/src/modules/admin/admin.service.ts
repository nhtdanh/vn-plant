import * as taxonService from "../taxon/taxon.service";
import * as taxonImageService from "../taxon/taxonImage.service";
import * as userService from "../user/user.service";
import { prisma } from "../../config/prisma";

export async function getSystemStats() {
  const [
    taxonStats,
    userStats,
    imageStats,
    totalBookmarks,
    auditStats,
    distributionStats,
  ] = await Promise.all([
    taxonService.countStats(),
    userService.countTotalUsers(),
    taxonImageService.countStats(),
    prisma.bookmark.count(),
    taxonService.getSystemAudit(),
    taxonService.getDistributionStats(),
  ]);

  return {
    taxa: {
      total: taxonStats.total,
      published: taxonStats.published,
      draft: taxonStats.draft,
    },
    users: {
      total: userStats.total,
    },
    contributions: {
      total: imageStats.total,
      pending: imageStats.pending,
      contributed: imageStats.contributed,
    },
    engagement: {
      totalBookmarks,
    },
    audit: auditStats,
    distribution: distributionStats,
  };
}


