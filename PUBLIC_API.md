# Đặc tả Public API - eFloraVN

Tài liệu hướng dẫn sử dụng các API public, không yêu cầu xác thực.

**Base URL:** `https://efloravn.vercel.app/api/v1`

---

## 1. Lấy danh sách Thực vật

Endpoint này dùng để tìm kiếm, lọc và phân trang danh sách các loài thực vật.

**Endpoint:** `GET /taxa`

### Tham số Query (Tùy chọn)

| Tham số | Kiểu dữ liệu | Mô tả |
| :--- | :--- | :--- |
| `q` | `string` | Từ khóa tìm kiếm (Tên khoa học, tên tiếng Việt, tên thường gọi hoặc đồng danh). |
| `rank` | `string[]` | Lọc theo bậc phân loại (VD: `family`, `genus`, `species`). Hỗ trợ truyền nhiều giá trị. |
| `group` | `string[]` | Lọc theo nhóm: `angiosperm`, `gymnosperm`, `fern`. |
| `province` | `string[]` | Lọc theo định danh tỉnh thành (VD: `lam-dong`). |
| `parentId` | `integer` | Lọc danh sách các mục con của một ID cụ thể. |
| `page` | `integer` | Số trang hiện tại (Mặc định: 1). |
| `limit` | `integer` | Số lượng kết quả mỗi trang (Mặc định: 20, Tối đa: 100). |

### Ví dụ Request

- `GET` [https://efloravn.vercel.app/api/v1/taxa?q=lan&group=angiosperm&page=1&limit=5](https://efloravn.vercel.app/api/v1/taxa?q=lan&group=angiosperm&page=1&limit=5)

### Response

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 5315208,
        "slug": "rhynchostylis-gigantea-lindl-ridl",
        "canonicalName": "Rhynchostylis gigantea",
        "scientificName": "Rhynchostylis gigantea (Lindl.) Ridl.",
        "vietnameseName": "Lan Ngọc Điểm",
        "primaryImageUrl": "https://pub-0c83edb15370419b9a81c90f1e1ad390.r2.dev/taxa/14419694b0936d701cc770d88b04a1b2.webp",
        "rank": "species",
        "descriptionLang": "vi",
        "hasVietnamRecord": true,
        "orderInBook": "11557",
        "score": 66.4285704940557
      },
      {
        "id": 3153099,
        "slug": "magnolia-champaca-l-baill-ex-pierre",
        "canonicalName": "Magnolia champaca",
        "scientificName": "Magnolia champaca (L.) Baill. ex Pierre",
        "vietnameseName": "Hoàng Ngọc Lan",
        "primaryImageUrl": "https://pub-0c83edb15370419b9a81c90f1e1ad390.r2.dev/taxa/215e4b51170eadc4bf7ffa8aa69b59a5.webp",
        "rank": "species",
        "descriptionLang": "vi",
        "hasVietnamRecord": true,
        "orderInBook": "950",
        "score": 56.3999990671873
      },
      "..."
    ],
    "meta": {
      "total": 1180,
      "page": 1,
      "limit": 5,
      "totalPages": 236
    }
  }
}
```

---

## 2. Chi tiết Thực vật

Endpoint này cung cấp toàn bộ dữ liệu sinh học, phân bổ địa lý và hình ảnh liên quan của một loài.

**Endpoint:** `GET /taxa/:slug` (hoặc `GET /taxa/:id`)

*Lưu ý: Endpoint tự động nhận diện tham số truyền vào là ID (nếu chỉ chứa các chữ số) hoặc Slug (nếu có chứa chữ cái/gạch ngang).*

### Ví dụ Request

- Truy vấn bằng Slug: `GET` [https://efloravn.vercel.app/api/v1/taxa/nelumbo-nucifera-gaertn](https://efloravn.vercel.app/api/v1/taxa/nelumbo-nucifera-gaertn)
- Truy vấn bằng ID: `GET` [https://efloravn.vercel.app/api/v1/taxa/2882449](https://efloravn.vercel.app/api/v1/taxa/2882449)

### Response

```json
{
  "success": true,
  "data": {
    "id": 2882449,
    "slug": "nelumbo-nucifera-gaertn",
    "canonicalName": "Nelumbo nucifera Gaertn.",
    "scientificName": "Nelumbo nucifera Gaertn.",
    "author": "Gaertn.",
    "vietnameseName": "Sen Hồng",
    "primaryImageUrl": "https://pub-0c83edb15370419b9a81c90f1e1ad390.r2.dev/taxa/90ba32c644c6ca7dbec157b7b6e923bf.webp",
    "rank": "species",
    "plantGroup": "angiosperm",
    "parentId": 2882448,
    "status": "published",
    "hasVietnamRecord": true,
    
    "description": "Sen hồng, là một loài thực vật thủy sinh thân thảo sống lâu năm thuộc chi sen...",
    "descriptionLang": "vi",
    "habit": "Cây ưa bùn có củ (thân rễ) dài, có ngăn ngang; thân và cuống có bộng to dài.",
    "leaf": "Cuống lá tròn có gai nhỏ; phiến hình lọng, to.",
    "reproduction": "Hoa to, nhiều phiến hoa trắng hay hồng; tiểu nhụy có mũi cong...",
    "phenology": "Ra hoa tháng 1-12, kết trái tháng 1-12.",
    "value": "Hoa đẹp; ngó, căn hành, bế quả ăn được; tiểu nhụy dùng ướp trà...",
    "distributionText": "Trồng; hoang ở An Giang;",
    "note": null,
    
    "sourceName": null,
    "externalId": null,
    "orderInBook": "1255",
    "rawDescriptionInBook": "Nê thực vật có củ (căn hành) dài, có ngăn ngang...",
    "createdAt": "2026-04-11T10:04:40.929Z",
    "updatedAt": "2026-04-24T12:38:31.489Z",

    "synonyms": [
      {
        "id": 247137,
        "taxonId": 2882449,
        "scientificName": "Nelumbium album Bercht. & J.Presl",
        "sourceName": "GBIF",
        "externalId": "3702851",
        "createdAt": "2026-04-11T10:04:40.929Z",
        "updatedAt": "2026-04-11T10:04:40.929Z"
      },
      "..."
    ],
    "commonNames": [
      {
        "id": 45445,
        "taxonId": 2882449,
        "name": "Sen Hồng",
        "language": "vi",
        "isPrimary": true,
        "regionNote": null,
        "source": null,
        "createdAt": "2026-04-24T12:35:49.551Z",
        "updatedAt": "2026-04-24T12:35:49.551Z"
      },
      "..."
    ],
    "images": [
      {
        "id": 214676,
        "taxonId": 2882449,
        "url": "https://pub-0c83edb15370419b9a81c90f1e1ad390.r2.dev/taxa/90ba32c644c6ca7dbec157b7b6e923bf.webp",
        "storageKey": "taxa/90ba32c644c6ca7dbec157b7b6e923bf.webp",
        "externalSource": "iNaturalist (Default)",
        "externalId": "https://inaturalist-open-data.s3.amazonaws.com/photos/116385724/large.jpeg",
        "caption": "",
        "blurHash": "UKEL~ZMg0cxalPaOt7oy0ct6}vX5j=V@iyoM",
        "width": 1024,
        "height": 768,
        "author": "(c) Inessa, some rights reserved (CC BY-NC), uploaded by Inessa",
        "license": "cc-by-nc",
        "isPrimary": true,
        "sortOrder": 0,
        "status": "approved",
        "recordNote": null,
        "reviewedAt": null,
        "reviewedBy": null,
        "contributorId": null,
        "createdAt": "2026-04-11T10:04:40.929Z",
        "updatedAt": "2026-04-24T12:38:30.609Z"
      },
      "..."
    ],
    "provinces": [
      {
        "taxonId": 2882449,
        "provinceId": 297,
        "province": {
          "id": 297,
          "name": "An Giang"
        }
      }
    ],
    "children": []
  }
}
```

---

## 3. Gợi ý Tìm kiếm Nhanh (Autocomplete)

Sử dụng endpoint này để xây dựng tính năng type-ahead/autocomplete trên thanh tìm kiếm. Kết quả được tối ưu tốc độ và chỉ trả về các trường cơ bản.

**Endpoint:** `GET /taxa/autocomplete`

### Tham số Query

| Tham số | Kiểu dữ liệu | Mô tả |
| :--- | :--- | :--- |
| `q` | `string` | **(Bắt buộc)** Từ khóa người dùng đang nhập. |
| `limit` | `integer` | Số lượng gợi ý trả về (Mặc định: 5, Tối đa: 20). |

### Ví dụ Request

- `GET` [https://efloravn.vercel.app/api/v1/taxa/autocomplete?q=sen&limit=3](https://efloravn.vercel.app/api/v1/taxa/autocomplete?q=sen&limit=3)

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": 2882449,
      "scientificName": "Nelumbo nucifera Gaertn.",
      "canonicalName": "Nelumbo nucifera Gaertn.",
      "vietnameseName": "Sen Hồng",
      "slug": "nelumbo-nucifera-gaertn",
      "rank": "species",
      "primaryImageUrl": "https://pub-0c83edb15370419b9a81c90f1e1ad390.r2.dev/taxa/90ba32c644c6ca7dbec157b7b6e923bf.webp",
      "score": 2.5
    },
    {
      "id": 2883272,
      "scientificName": "Madhuca pasquieri (Dubard) H.J.Lam",
      "canonicalName": "Madhuca pasquieri",
      "vietnameseName": "Sến Mật",
      "slug": "madhuca-pasquieri-dubard-hjlam",
      "rank": "species",
      "primaryImageUrl": "https://pub-0c83edb15370419b9a81c90f1e1ad390.r2.dev/taxa/3d2c5532773f2a981b5f680a874871fa.webp",
      "score": 1
    },
    {
      "id": 2956904,
      "scientificName": "Senna Mill.",
      "canonicalName": "Senna",
      "vietnameseName": null,
      "slug": "senna-mill",
      "rank": "genus",
      "primaryImageUrl": "https://pub-0c83edb15370419b9a81c90f1e1ad390.r2.dev/taxa/fef03987ef5345d078a09c3317ee1b37.webp",
      "score": 0.75
    }
  ]
}
```

---

## 4. Cây Phân loại (Breadcrumb)

Endpoint này hỗ trợ lấy đường dẫn phả hệ (từ cấp Giới cho đến cấp cha trực tiếp) của một loài để hiển thị Breadcrumb. Hệ thống tự động rút gọn tên khoa học ở các cấp con để tránh lặp từ.

**Endpoint:** `GET /taxa/:id/ancestors`

### Ví dụ Request

- `GET` [https://efloravn.vercel.app/api/v1/taxa/2882449/ancestors](https://efloravn.vercel.app/api/v1/taxa/2882449/ancestors)

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": 7707728,
      "scientificName": "Tracheophyta",
      "canonicalName": "Tracheophyta",
      "vietnameseName": "Thực Vật Có Mạch",
      "slug": "tracheophyta",
      "rank": "phylum",
      "displayName": "Tracheophyta"
    },
    {
      "id": 220,
      "scientificName": "Magnoliopsida",
      "canonicalName": "Magnoliopsida",
      "vietnameseName": null,
      "slug": "magnoliopsida",
      "rank": "taxonomicClass",
      "displayName": "Magnoliopsida"
    },
    {
      "id": 400,
      "scientificName": "Proteales",
      "canonicalName": "Proteales",
      "vietnameseName": "Bộ Quắn Hoa",
      "slug": "proteales",
      "rank": "order",
      "displayName": "Proteales"
    },
    {
      "id": 2424,
      "scientificName": "Nelumbonaceae",
      "canonicalName": "Nelumbonaceae",
      "vietnameseName": "Họ Sen",
      "slug": "nelumbonaceae",
      "rank": "family",
      "displayName": "Nelumbonaceae"
    },
    {
      "id": 2882448,
      "scientificName": "Nelumbo Adans.",
      "canonicalName": "Nelumbo",
      "vietnameseName": "Chi Sen",
      "slug": "nelumbo-adans",
      "rank": "genus",
      "displayName": "Nelumbo"
    }
  ]
}
```

---

## 5. Dữ liệu Tham chiếu (Metadata)

Các endpoint này cung cấp hằng số hệ thống để xây dựng bộ lọc giao diện.

### 5.1. Bậc Phân loại và Nhóm

**Endpoint:** `GET /taxa/metadata`

- `GET` [https://efloravn.vercel.app/api/v1/taxa/metadata](https://efloravn.vercel.app/api/v1/taxa/metadata)

**Response**

```json
{
  "success": true,
  "data": {
    "ranks": [
      "kingdom",
      "phylum",
      "taxonomicClass",
      "order",
      "family",
      "genus",
      "species",
      "subspecies",
      "variety",
      "forma"
    ],
    "plantGroups": [
      "angiosperm",
      "gymnosperm",
      "fern"
    ],
    "status": [
      "draft",
      "published",
      "archived"
    ]
  }
}
```

### 5.2. Danh sách Tỉnh thành

**Endpoint:** `GET /taxa/provinces`

- `GET` [https://efloravn.vercel.app/api/v1/taxa/provinces](https://efloravn.vercel.app/api/v1/taxa/provinces)
**Response**

```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Hà Nội" },
    { "id": 2, "name": "Hà Giang" }
  ]
}
```
