/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./when-a55a8a4c","./Check-bc1d37d9","./Math-d7cbfcf6","./Cartesian2-6ec3db89","./Transforms-a4d7073e","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-919a7463","./GeometryAttribute-291ff23b","./GeometryAttributes-1c7ce91d","./AttributeCompression-6cfb9427","./GeometryPipeline-9b42374e","./EncodedCartesian3-5ad054af","./IndexDatatype-4351ba4c","./IntersectionTests-3d9e1b94","./Plane-37b84dad","./GeometryOffsetAttribute-c9accdb9","./VertexFormat-7f136973","./EllipseGeometryLibrary-62835faa","./GeometryInstance-fadc2629","./EllipseGeometry-cb7017cd"],function(r,e,t,a,n,c,i,o,s,d,l,b,f,m,p,y,u,G,C,E,A){"use strict";return function(e,t){return r.defined(t)&&(e=A.EllipseGeometry.unpack(e,t)),e._center=a.Cartesian3.clone(e._center),e._ellipsoid=a.Ellipsoid.clone(e._ellipsoid),A.EllipseGeometry.createGeometry(e)}});
