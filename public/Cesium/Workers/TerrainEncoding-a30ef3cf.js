define(["exports","./Transforms-f88f3a93","./Cartesian2-8646c5a1","./Check-24483042","./when-54335d57","./AttributeCompression-10c27d9c","./ComponentDatatype-1a100acd","./Math-d6182036"],function(t,l,p,e,h,d,o,f){"use strict";function i(t,e){this._ellipsoid=t,this._cameraPosition=new p.Cartesian3,this._cameraPositionInScaledSpace=new p.Cartesian3,this._distanceToLimbInScaledSpaceSquared=0,h.defined(e)&&(this.cameraPosition=e)}Object.defineProperties(i.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(t){var e=this._ellipsoid.transformPositionToScaledSpace(t,this._cameraPositionInScaledSpace),i=p.Cartesian3.magnitudeSquared(e)-1;p.Cartesian3.clone(t,this._cameraPosition),this._cameraPositionInScaledSpace=e,this._distanceToLimbInScaledSpaceSquared=i}}});var r=new p.Cartesian3;i.prototype.isPointVisible=function(t){return S(this._ellipsoid.transformPositionToScaledSpace(t,r),this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)},i.prototype.isScaledSpacePointVisible=function(t){return S(t,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};var a=new p.Cartesian3;i.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(t,e){var i,r=this._ellipsoid,e=h.defined(e)&&e<0&&r.minimumRadius>-e?((i=a).x=this._cameraPosition.x/(r.radii.x+e),i.y=this._cameraPosition.y/(r.radii.y+e),i.z=this._cameraPosition.z/(r.radii.z+e),i.x*i.x+i.y*i.y+i.z*i.z-1):(i=this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared);return S(t,i,e)},i.prototype.computeHorizonCullingPoint=function(t,e,i){return u(this._ellipsoid,t,e,i)};var s=p.Ellipsoid.clone(p.Ellipsoid.UNIT_SPHERE);i.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(t,e,i,r){return u(c(this._ellipsoid,i,s),t,e,r)},i.prototype.computeHorizonCullingPointFromVertices=function(t,e,i,r,a){return C(this._ellipsoid,t,e,i,r,a)},i.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(t,e,i,r,a,n){return C(c(this._ellipsoid,a,s),t,e,i,r,n)};var n=[];i.prototype.computeHorizonCullingPointFromRectangle=function(t,e,i){var r=p.Rectangle.subsample(t,e,0,n),t=l.BoundingSphere.fromPoints(r);if(!(p.Cartesian3.magnitude(t.center)<.1*e.minimumRadius))return this.computeHorizonCullingPoint(t.center,r,i)};var m=new p.Cartesian3;function c(t,e,i){return h.defined(e)&&e<0&&t.minimumRadius>-e&&(e=p.Cartesian3.fromElements(t.radii.x+e,t.radii.y+e,t.radii.z+e,m),t=p.Ellipsoid.fromCartesian3(e,i)),t}function u(t,e,i,r){h.defined(r)||(r=new p.Cartesian3);for(var a=P(t,e),n=0,o=0,s=i.length;o<s;++o){var m=b(t,i[o],a);if(m<0)return;n=Math.max(n,m)}return g(a,n,r)}var x=new p.Cartesian3;function C(t,e,i,r,a,n){h.defined(n)||(n=new p.Cartesian3),r=h.defaultValue(r,3),a=h.defaultValue(a,p.Cartesian3.ZERO);for(var o=P(t,e),s=0,m=0,c=i.length;m<c;m+=r){x.x=i[m]+a.x,x.y=i[m+1]+a.y,x.z=i[m+2]+a.z;var u=b(t,x,o);if(u<0)return;s=Math.max(s,u)}return g(o,s,n)}function S(t,e,i){t=p.Cartesian3.subtract(t,e,r),e=-p.Cartesian3.dot(t,e);return!(i<0?0<e:i<e&&e*e/p.Cartesian3.magnitudeSquared(t)>i)}var y=new p.Cartesian3,M=new p.Cartesian3;function b(t,e,i){var r=t.transformPositionToScaledSpace(e,y),t=p.Cartesian3.magnitudeSquared(r),e=Math.sqrt(t),r=p.Cartesian3.divideByScalar(r,e,M),t=Math.max(1,t),e=1/(e=Math.max(1,e));return 1/(p.Cartesian3.dot(r,i)*e-p.Cartesian3.magnitude(p.Cartesian3.cross(r,i,r))*(Math.sqrt(t-1)*e))}function g(t,e,i){if(!(e<=0||e===1/0||e!=e))return p.Cartesian3.multiplyByScalar(t,e,i)}var T=new p.Cartesian3;function P(t,e){return p.Cartesian3.equals(e,p.Cartesian3.ZERO)?e:(t.transformPositionToScaledSpace(e,T),p.Cartesian3.normalize(T,T))}var z=Object.freeze({NONE:0,BITS12:1}),E=new p.Cartesian3,v=new p.Cartesian3,N=new p.Cartesian2,I=new l.Matrix4,B=new l.Matrix4,_=Math.pow(2,12);function w(t,e,i,r,a,n){var o,s,m,c,u,d=z.NONE;h.defined(t)&&h.defined(e)&&h.defined(i)&&h.defined(r)&&(c=t.minimum,s=t.maximum,u=p.Cartesian3.subtract(s,c,v),m=i-e,d=Math.max(p.Cartesian3.maximumComponent(u),m)<_-1?z.BITS12:z.NONE,o=t.center,s=l.Matrix4.inverseTransformation(r,new l.Matrix4),m=p.Cartesian3.negate(c,E),l.Matrix4.multiply(l.Matrix4.fromTranslation(m,I),s,s),(m=E).x=1/u.x,m.y=1/u.y,m.z=1/u.z,l.Matrix4.multiply(l.Matrix4.fromScale(m,I),s,s),m=l.Matrix4.clone(r),l.Matrix4.setTranslation(m,p.Cartesian3.ZERO,m),r=l.Matrix4.clone(r,new l.Matrix4),c=l.Matrix4.fromTranslation(c,I),u=l.Matrix4.fromScale(u,B),u=l.Matrix4.multiply(c,u,I),l.Matrix4.multiply(r,u,r),l.Matrix4.multiply(m,u,m)),this.quantization=d,this.minimumHeight=e,this.maximumHeight=i,this.center=o,this.toScaledENU=s,this.fromScaledENU=r,this.matrix=m,this.hasVertexNormals=a,this.hasWebMercatorT=h.defaultValue(n,!1)}w.prototype.encode=function(t,e,i,r,a,n,o){var s,m,c=r.x,u=r.y;return this.quantization===z.BITS12?((i=l.Matrix4.multiplyByPoint(this.toScaledENU,i,E)).x=f.CesiumMath.clamp(i.x,0,1),i.y=f.CesiumMath.clamp(i.y,0,1),i.z=f.CesiumMath.clamp(i.z,0,1),s=this.maximumHeight-this.minimumHeight,m=f.CesiumMath.clamp((a-this.minimumHeight)/s,0,1),p.Cartesian2.fromElements(i.x,i.y,N),r=d.AttributeCompression.compressTextureCoordinates(N),p.Cartesian2.fromElements(i.z,m,N),s=d.AttributeCompression.compressTextureCoordinates(N),p.Cartesian2.fromElements(c,u,N),m=d.AttributeCompression.compressTextureCoordinates(N),t[e++]=r,t[e++]=s,t[e++]=m,this.hasWebMercatorT&&(p.Cartesian2.fromElements(o,0,N),m=d.AttributeCompression.compressTextureCoordinates(N),t[e++]=m)):(p.Cartesian3.subtract(i,this.center,E),t[e++]=E.x,t[e++]=E.y,t[e++]=E.z,t[e++]=a,t[e++]=c,t[e++]=u,this.hasWebMercatorT&&(t[e++]=o)),this.hasVertexNormals&&(t[e++]=d.AttributeCompression.octPackFloat(n)),e},w.prototype.decodePosition=function(t,e,i){if(h.defined(i)||(i=new p.Cartesian3),e*=this.getStride(),this.quantization!==z.BITS12)return i.x=t[e],i.y=t[e+1],i.z=t[e+2],p.Cartesian3.add(i,this.center,i);var r=d.AttributeCompression.decompressTextureCoordinates(t[e],N);i.x=r.x,i.y=r.y;e=d.AttributeCompression.decompressTextureCoordinates(t[e+1],N);return i.z=e.x,l.Matrix4.multiplyByPoint(this.fromScaledENU,i,i)},w.prototype.decodeTextureCoordinates=function(t,e,i){return h.defined(i)||(i=new p.Cartesian2),e*=this.getStride(),this.quantization===z.BITS12?d.AttributeCompression.decompressTextureCoordinates(t[e+2],i):p.Cartesian2.fromElements(t[e+4],t[e+5],i)},w.prototype.decodeHeight=function(t,e){return e*=this.getStride(),this.quantization!==z.BITS12?t[e+3]:d.AttributeCompression.decompressTextureCoordinates(t[e+1],N).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight},w.prototype.decodeWebMercatorT=function(t,e){return e*=this.getStride(),this.quantization===z.BITS12?d.AttributeCompression.decompressTextureCoordinates(t[e+3],N).x:t[e+6]},w.prototype.getOctEncodedNormal=function(t,e,i){t=t[e=(e+1)*this.getStride()-1]/256,e=Math.floor(t);return p.Cartesian2.fromElements(e,256*(t-e),i)},w.prototype.getStride=function(){var t=this.quantization===z.BITS12?3:6;return this.hasWebMercatorT&&++t,this.hasVertexNormals&&++t,t};var A={position3DAndHeight:0,textureCoordAndEncodedNormals:1},q={compressed0:0,compressed1:1};w.prototype.getAttributes=function(t){var e,i=o.ComponentDatatype.FLOAT,r=o.ComponentDatatype.getSizeInBytes(i);if(this.quantization===z.NONE){var a=2;return this.hasWebMercatorT&&++a,this.hasVertexNormals&&++a,[{index:A.position3DAndHeight,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:4,offsetInBytes:0,strideInBytes:e=(4+a)*r},{index:A.textureCoordAndEncodedNormals,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:a,offsetInBytes:4*r,strideInBytes:e}]}var n=3,a=0;return(this.hasWebMercatorT||this.hasVertexNormals)&&++n,this.hasWebMercatorT&&this.hasVertexNormals?(++a,[{index:q.compressed0,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:n,offsetInBytes:0,strideInBytes:e=(n+1)*r},{index:q.compressed1,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:1,offsetInBytes:n*r,strideInBytes:e}]):[{index:q.compressed0,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:n}]},w.prototype.getAttributeLocations=function(){return this.quantization===z.NONE?A:q},w.clone=function(t,e){return(e=!h.defined(e)?new w:e).quantization=t.quantization,e.minimumHeight=t.minimumHeight,e.maximumHeight=t.maximumHeight,e.center=p.Cartesian3.clone(t.center),e.toScaledENU=l.Matrix4.clone(t.toScaledENU),e.fromScaledENU=l.Matrix4.clone(t.fromScaledENU),e.matrix=l.Matrix4.clone(t.matrix),e.hasVertexNormals=t.hasVertexNormals,e.hasWebMercatorT=t.hasWebMercatorT,e},t.EllipsoidalOccluder=i,t.TerrainEncoding=w});
