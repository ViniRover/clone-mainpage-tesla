import { useCallback, useContext, useEffect } from 'react';

import ModelContext, { CarModel } from './ModelContext';

interface Return {
  registerModel: (model: CarModel) => void;
  getModel: (modelName: string) => CarModel | null;
}

export default function useModel(modelName: string): Return {
  const { registerModel, unregisterModel, getModelByName } = useContext(
    ModelContext,
  );

  useEffect(() => () => unregisterModel(modelName), [
    unregisterModel,
    modelName,
  ]);

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName,
  ]);

  return { registerModel, getModel };
}
