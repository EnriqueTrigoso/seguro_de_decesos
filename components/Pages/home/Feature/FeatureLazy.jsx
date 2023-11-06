import dynamic from 'next/dynamic';

const FeatureLazy = dynamic(() => import('./Feature'));

export default FeatureLazy;