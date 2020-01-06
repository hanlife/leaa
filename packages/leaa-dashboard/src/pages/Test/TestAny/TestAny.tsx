import React from 'react';
import { useTranslation } from 'react-i18next';
import { IPage } from '@leaa/dashboard/src/interfaces';
import { useStore } from '@leaa/dashboard/src/stores';
import { useMutation } from '@apollo/react-hooks';
import { Button } from 'antd';

import { HtmlMeta, SelectTagId, SelectCategoryIdByTree, Rcon, SuspenseFallback } from '@leaa/dashboard/src/components';
import { RedeemCouponInput } from '@leaa/common/src/dtos/coupon';
import { Zan } from '@leaa/common/src/entrys';
import { LIKE_ZAN } from '@leaa/dashboard/src/graphqls';
import { messageUtil } from '@leaa/dashboard/src/utils';
// import { Icon } from 'antd';

// import { MessageOutlined, createFromIconfontCN } from '@ant-design/icons';

export default (props: IPage) => {
  const { t } = useTranslation();

  const store = useStore();
  store.mapping.abcMapping = ['AAAAAAAAAAAAAAAAAA'];

  const ls = [];

  for (let i = 0, len = localStorage.length; i < len; i += 1) {
    if (typeof localStorage.key(i) === 'string') {
      ls.push(localStorage.getItem(localStorage.key(i) as string));
    }
  }

  // mutation
  const [likeZanMutate, likeZanMutation] = useMutation<{ zan: Zan }>(LIKE_ZAN, {
    variables: { uuid: 'fd959fa1-0a8f-4bc8-a39b-dbdada521bf5' },
    // apollo-link-error onError: e => messageUtil.gqlError(e.message),
    onCompleted(e) {
      // messageUtil.gqlSuccess(t('_lang:createdSuccessfully'));
      messageUtil.gqlSuccess('Like Zan!');
    },
  });

  return (
    <div>
      <HtmlMeta title={t(`${props.route.namei18n}`)} />

      <h2>ZAN</h2>
      <Button onClick={() => likeZanMutate()} size="small">
        Like!
      </Button>
      <br />
      <br />

      <h2>TAG</h2>
      <SelectTagId selectedTagsMaxLength={5} />
      <br />
      <br />

      {/* <h5>ALL</h5> */}
      {/* <SelectCategoryIdByTree componentProps={{ allowClear: true }} style={{ width: 200 }} /> */}

      <h5>ARTICLES</h5>
      <SelectCategoryIdByTree componentProps={{ allowClear: true }} style={{ width: 200 }} parentSlug="articles" />
      <br />
      <br />

      <h5>BRANDS</h5>
      <SelectCategoryIdByTree componentProps={{ allowClear: true }} style={{ width: 200 }} parentSlug="brands" />
      <br />
      <br />

      <SuspenseFallback />

      <Rcon type="ri-time-line" />
    </div>
  );
};
