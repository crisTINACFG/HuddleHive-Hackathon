import React from 'react';
import { Icon } from '@iconify/react';

interface AmenitiesProps {
  amenities: {
    wheelchairAccessible: boolean;
    prayerRooms: boolean;
    airConditioning: boolean;
    soundSystem: boolean;
    wifi: boolean;
  };
}

const AmenitiesDisplay: React.FC<AmenitiesProps> = ({ amenities }) => {
  const amenityItems = [
    {
      key: 'wheelchairAccessible',
      label: 'Wheelchair Accessible',
      icon: 'ph:wheelchair',
      value: amenities.wheelchairAccessible
    },
    {
      key: 'prayerRooms',
      label: 'Prayer Rooms',
      icon: 'ph:house-simple',
      value: amenities.prayerRooms
    },
    {
      key: 'airConditioning',
      label: 'Air Conditioning',
      icon: 'ph:snowflake',
      value: amenities.airConditioning
    },
    {
      key: 'soundSystem',
      label: 'Sound System',
      icon: 'ph:speaker-high',
      value: amenities.soundSystem
    },
    {
      key: 'wifi',
      label: 'WiFi',
      icon: 'ph:wifi',
      value: amenities.wifi
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">
        What this property offers
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenityItems.map((item) => (
          <div
            key={item.key}
            className={`flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 ${
              item.value
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                : 'bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
            }`}
          >
            <Icon
              icon={item.icon}
              width={20}
              height={20}
              className={item.value ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}
            />
            <span className={`text-sm font-medium ${item.value ? '' : 'line-through'}`}>
              {item.label}
            </span>
            {item.value && (
              <Icon
                icon="ph:check-circle"
                width={16}
                height={16}
                className="text-green-600 dark:text-green-400 ml-auto"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesDisplay; 