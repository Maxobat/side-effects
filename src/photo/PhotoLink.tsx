'use client';

import { ReactNode } from 'react';
import { Photo } from '@/photo';
import Link from 'next/link';
import { AnimationConfig } from '../components/AnimateItems';
import { useAppState } from '@/state';
import { pathForPhoto } from '@/site/paths';

export default function PhotoLink({
  photo,
  tag,
  prefetch,
  nextPhotoAnimation,
  children,
}: {
  photo?: Photo
  tag?: string
  prefetch?: boolean
  nextPhotoAnimation?: AnimationConfig
  children: ReactNode
}) {
  const { setNextPhotoAnimation } = useAppState();
  
  return (
    photo
      ? <Link
        href={pathForPhoto(photo, tag)}
        prefetch={prefetch}
        onClick={() => {
          if (nextPhotoAnimation) {
            setNextPhotoAnimation?.(nextPhotoAnimation);
          }
        }}
        scroll={false}
      >
        {children}
      </Link>
      : <span className="text-gray-300 dark:text-gray-700 cursor-default">
        {children}
      </span>
  );
};
