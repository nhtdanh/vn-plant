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

```http
GET /taxa?q=lan&group=angiosperm&page=1&limit=10
```

### Cấu trúc Phản hồi

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 10000001,
        "slug": "lan-hai-canh-sen",
        "canonicalName": "Paphiopedilum delenatii",
        "scientificName": "Paphiopedilum delenatii Guillaumin",
        "vietnameseName": "Lan hài cánh sen",
        "primaryImageUrl": "https://pub-xxx.r2.dev/taxa/image.webp",
        "rank": "species",
        "descriptionLang": "vi",
        "hasVietnamRecord": true,
        "orderInBook": "123",
        "score": 25.5
      }
    ],
    "meta": {
      "total": 150,
      "page": 1,
      "limit": 10,
      "totalPages": 15
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

```http
# Truy vấn bằng Slug
GET /taxa/paphiopedilum-delenatii

# Truy vấn bằng ID
GET /taxa/10000001
```

### Cấu trúc Phản hồi

```json
{
  "success": true,
  "data": {
    "id": 10000001,
    "slug": "paphiopedilum-delenatii",
    "canonicalName": "Paphiopedilum delenatii",
    "scientificName": "Paphiopedilum delenatii Guillaumin",
    "author": "Guillaumin",
    "vietnameseName": "Lan hài cánh sen",
    "primaryImageUrl": "https://pub-xxx.r2.dev/taxa/image.webp",
    "rank": "species",
    "plantGroup": "angiosperm",
    "parentId": 122,
    "status": "published",
    "hasVietnamRecord": true,
    
    "description": "<p>Mô tả chi tiết sinh học...</p>",
    "descriptionLang": "vi",
    "habit": "Thân thảo",
    "leaf": "Lá hình bầu dục...",
    "reproduction": "Hoa mọc đơn độc...",
    "phenology": "Ra hoa tháng 3-4",
    "value": "Làm cảnh, bảo tồn",
    "distributionText": "Đặc hữu của Việt Nam, phân bố ở Khánh Hòa.",
    "note": null,
    
    "sourceName": "Sách Đỏ Việt Nam",
    "externalId": null,
    "orderInBook": "456",
    "rawDescriptionInBook": "Văn bản gốc...",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-02T00:00:00.000Z",

    "synonyms": [
      {
        "id": 1,
        "scientificName": "Cypripedium delenatii",
        "sourceName": "Kew",
        "externalId": "12345"
      }
    ],
    "commonNames": [
      {
        "id": 1,
        "name": "Lan hài",
        "language": "vi",
        "isPrimary": true,
        "regionNote": "Phổ biến",
        "source": "Dân gian"
      }
    ],
    "images": [
      {
        "id": 1,
        "url": "https://pub-xxx.r2.dev/taxa/image.webp",
        "externalSource": null,
        "caption": "Hoa nở tại vườn",
        "author": "Nguyen Van A",
        "license": "CC BY 4.0",
        "isPrimary": true,
        "width": 1200,
        "height": 800,
        "status": "approved"
      }
    ],
    "provinces": [
      {
        "provinceId": 42,
        "province": { "id": 42, "name": "Lâm Đồng" }
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

```http
GET /taxa/autocomplete?q=lan&limit=5
```

### Cấu trúc Phản hồi

```json
{
  "success": true,
  "data": [
    {
      "id": 10000001,
      "scientificName": "Paphiopedilum delenatii",
      "canonicalName": "Paphiopedilum delenatii",
      "vietnameseName": "Lan hài cánh sen",
      "slug": "paphiopedilum-delenatii",
      "rank": "species",
      "primaryImageUrl": "https://pub-xxx.r2.dev/taxa/image.webp",
      "score": 3.5
    }
  ]
}
```

---

## 4. Cây Phân loại (Breadcrumb)

Endpoint này hỗ trợ lấy đường dẫn phả hệ (từ cấp Giới cho đến cấp cha trực tiếp) của một loài để hiển thị Breadcrumb. Hệ thống tự động rút gọn tên khoa học ở các cấp con để tránh lặp từ.

**Endpoint:** `GET /taxa/:id/ancestors`

### Ví dụ Request

```http
GET /taxa/10000001/ancestors
```

### Cấu trúc Phản hồi

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "scientificName": "Plantae",
      "canonicalName": "Plantae",
      "vietnameseName": "Giới thực vật",
      "slug": "plantae",
      "rank": "kingdom",
      "displayName": "Plantae"
    },
    {
      "id": 100,
      "scientificName": "Orchidaceae",
      "canonicalName": "Orchidaceae",
      "vietnameseName": "Họ lan",
      "slug": "orchidaceae",
      "rank": "family",
      "displayName": "Orchidaceae"
    }
  ]
}
```

---

## 5. Dữ liệu Tham chiếu (Metadata)

Các endpoint này cung cấp hằng số hệ thống để xây dựng bộ lọc giao diện.

### 5.1. Bậc Phân loại và Nhóm

**Endpoint:** `GET /taxa/metadata`

```http
GET /taxa/metadata
```

**Cấu trúc Phản hồi**

```json
{
  "success": true,
  "data": {
    "ranks": ["kingdom", "phylum", "taxonomicClass", "..."],
    "plantGroups": ["angiosperm", "gymnosperm", "fern"],
    "status": ["draft", "published", "archived"]
  }
}
```

### 5.2. Danh sách Tỉnh thành

**Endpoint:** `GET /taxa/provinces`

```http
GET /taxa/provinces
```
**Cấu trúc Phản hồi**

```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Hà Nội" },
    { "id": 2, "name": "Hà Giang" }
  ]
}
```
