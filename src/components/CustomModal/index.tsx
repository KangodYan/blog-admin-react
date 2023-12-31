import { Input, Modal, Select } from '@arco-design/web-react';
import React from 'react';

import { DB } from '@/utils/dbConfig';
import { DataFilterProps } from '@/utils/hooks/useTableData';

import ModalTitle from '../ModalTitle';
import s from './index.module.scss';

interface Props {
  isEdit: boolean;
  isModalOpen: boolean;
  DBType: DB;
  modalOk: () => void;
  modalCancel: () => void;
  dataFilter?: DataFilterProps[];
  addText?: string;
  updateText?: string;
  render?: () => React.ReactNode;
}

const CustomModal: React.FC<Props> = ({
  isEdit,
  isModalOpen,
  DBType,
  modalOk,
  modalCancel,
  dataFilter = [],
  addText = '添加',
  updateText = '更新',
  render
}) => {
  const dataFilterRes = () =>
    dataFilter.map(({ text, data, setData, selectOptions }, index) => (
      selectOptions ?
        <Select
          addBefore={text}
          size='large'
          className={s.tags}
          maxTagCount={6}
          mode='multiple'
          allowCreate={false}
          showSearch
          allowClear
          unmountOnExit={false}
          value={data}
          onChange={value => setData(value)}
          options={selectOptions.map(item => ({
            value: item,
            label: item
          }))}
        />
      :
        <Input
          size='large'
          key={index}
          addBefore={text}
          value={data as string}
          onChange={value => setData(value)}
          className={s.modalInput}
        />
    ));

  return (
    <Modal
      title={
        <ModalTitle
          isEdit={isEdit}
          type={DBType}
          addText={addText}
          updateText={updateText}
        />
      }
      visible={isModalOpen}
      onOk={modalOk}
      onCancel={modalCancel}
    >
      {render?.() || dataFilterRes()}
    </Modal>
  );
};

export default CustomModal;
