/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { useQuerySubscriber } from '@kbn/unified-field-list/src/hooks/use_query_subscriber';
import { FieldStatisticsTable, type FieldStatisticsTableProps } from './field_stats_table';
import { useDiscoverServices } from '../../../../hooks/use_discover_services';

export const FieldStatisticsTab: React.FC<Omit<FieldStatisticsTableProps, 'query' | 'filters'>> =
  React.memo((props) => {
    const services = useDiscoverServices();
    const querySubscriberResult = useQuerySubscriber({
      data: services.data,
    });

    if (!services.dataVisualizer) return null;

    return (
      <FieldStatisticsTable
        {...props}
        query={querySubscriberResult.query}
        filters={querySubscriberResult.filters}
      />
    );
  });
