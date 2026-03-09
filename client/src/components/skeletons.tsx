import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SKELETON_BG = "#1e293b"; // slate-800
const SKELETON_FG = "#334155"; // slate-700

export function HeroSkeleton() {
  return (
    <SkeletonTheme baseColor={SKELETON_BG} highlightColor={SKELETON_FG}>
      <div className="flex flex-col justify-center min-h-[90vh] pt-20">
        <div className="max-w-4xl">
          <Skeleton width={150} height={24} className="mb-6 rounded-md" />
          <Skeleton height={80} className="mb-4 rounded-xl" />
          <Skeleton height={80} width="80%" className="mb-8 rounded-xl" />
          <Skeleton count={2} className="mb-10 rounded-md max-w-2xl" />
          <div className="flex gap-4">
            <Skeleton width={160} height={56} className="rounded-xl" />
            <Skeleton width={160} height={56} className="rounded-xl" />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export function AboutSkeleton() {
  return (
    <SkeletonTheme baseColor={SKELETON_BG} highlightColor={SKELETON_FG}>
      <div className="py-24">
        <Skeleton width={200} height={40} className="mb-12 rounded-lg" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Skeleton count={8} className="mb-4 rounded-md" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
              <Skeleton key={i} height={120} className="rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export function ExperienceSkeleton() {
  return (
    <SkeletonTheme baseColor={SKELETON_BG} highlightColor={SKELETON_FG}>
      <div className="py-24">
        <Skeleton width={250} height={40} className="mb-12 rounded-lg" />
        <div className="space-y-8">
          {[1, 2, 3].map(i => (
            <Skeleton key={i} height={160} className="rounded-2xl" />
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}

export function SkillsSkeleton() {
  return (
    <SkeletonTheme baseColor={SKELETON_BG} highlightColor={SKELETON_FG}>
      <div className="py-24">
        <div className="flex justify-center mb-12">
          <Skeleton width={200} height={40} className="rounded-lg" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <Skeleton key={i} height={120} className="rounded-2xl" />
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}
