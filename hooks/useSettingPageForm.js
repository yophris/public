import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useSettingFormPage = (plan) => {
  const qc = useQueryClient();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + plan.key, () => plan.getFn(plan.endpoint, { page: 1 }));

  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [editData, setEditData] = useState(null);
  // Delete
  const onDelete = useMutation((data) => plan.deleteFn(plan.endpoint, data), {
    onSuccess: () => {
      qc.invalidateQueries('get' + plan.key);
      alert('Deleted');
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });

  const editClickCB = (id) => {
    setOpenSideMenu(true);
    // TODO: Very Crucial
    setEditData(id);
  };

  const onDeleteClick = (id) => {
    if (window.confirm('Do you want to delete this ? ')) {
      onDelete.mutate({ id: id });
    }
    // setOpenSideMenu(true)
  };

  useEffect(
    (_) => {
      if (!openSideMenu) {
        setEditData(null);
      }
    },
    [openSideMenu]
  );

  return {
    isLoading,
    response,
    openSideMenu,
    setOpenSideMenu,
    editData,
    setEditData,
    editClickCB,
    onDeleteClick,
  };
};
