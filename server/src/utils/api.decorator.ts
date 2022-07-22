import {
  applyDecorators,
  Controller as ApiController,
  Get as ApiGet,
  Post as ApiPost,
  Put as ApiPut,
  Patch as ApiPatch,
  Delete as ApiDelete,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiResponse,
  ApiResponseMetadata,
  ApiTags,
} from '@nestjs/swagger';

interface OpenApiConfig {
  name: string;
  responseType: ApiResponseMetadata['type'];
}
export const OpenApi = ({ name, responseType }: OpenApiConfig) =>
  applyDecorators(
    ApiOperation({ operationId: name }),
    ApiResponse({
      status: 200,
      description: 'success',
      type: responseType,
    }),
  );

interface MethodConfig extends OpenApiConfig {
  route?: string;
}

export const Get = (config: MethodConfig) =>
  applyDecorators(ApiGet(), OpenApi(config));

export const Post = (config: MethodConfig) =>
  applyDecorators(ApiPost(), OpenApi(config));

export const Put = (config: MethodConfig) =>
  applyDecorators(ApiPut(), OpenApi(config));

export const Patch = (config: MethodConfig) =>
  applyDecorators(ApiPatch(), OpenApi(config));

export const Delete = (config: MethodConfig) =>
  applyDecorators(ApiDelete(), OpenApi(config));

export const Controller = (name?: string) =>
  applyDecorators(
    ApiController(name ? `api/${name}` : 'api'),
    ApiTags(name || 'home'),
  );
